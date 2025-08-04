import math

def reward_function(params):
    
    # Parâmetros do episódio
    speed = params['speed']
    all_wheels_on_track = params['all_wheels_on_track']
    is_offtrack = params['is_offtrack']
    is_crashed = params['is_crashed']
    is_reversed = params['is_reversed']
    distance_from_center = params['distance_from_center']
    track_width = params['track_width']
    steering = abs(params['steering_angle'])
    heading = params['heading'] # Angulo Atual do Carro
    closest_wp = params['closest_waypoints']
    waypoints = params['waypoints']
    is_left_of_center = params['is_left_of_center']
    is_right_of_center = not is_left_of_center

    
    
    CURVA_ESQUERDA = list(range(9, 13)) + list(range(37, 43)) + list(range(84, 91)) + list(range(107, 113)) + list(range(143, 150))
    CURVA_DIREITA = list(range(22, 29)) + list(range(119, 124)) + list(range(131, 135))
    
    # Recompensa base
    reward = 1.0

    # Penalizações severas para erros graves
    if not all_wheels_on_track or is_offtrack or is_crashed or is_reversed:
        return 1e-3

    # Estar dentro da pista
    if all_wheels_on_track:
        reward *= 1.3
    
    # Direção do carro alinhada com a pista
    next_wp = waypoints[closest_wp[1]]
    prev_wp = waypoints[closest_wp[0]]
    track_direction = math.degrees(math.atan2(next_wp[1] - prev_wp[1], next_wp[0] - prev_wp[0]))
    direction_diff = abs(track_direction - heading)
    if direction_diff > 180:
            direction_diff = 360 - direction_diff
            
    if closest_wp[1] not in (CURVA_DIREITA+CURVA_ESQUERDA):
        if direction_diff < 5:
            reward *= 1.6
        elif direction_diff < 10:
            reward *= 1.0
        else:
            return 1e-3
    else:
        if direction_diff < 5:
            reward *= 1.2
        elif direction_diff < 10:
            reward *= 1.0


    # Distância do centro da pista
    marker_1 = 0.1 * track_width
    marker_2 = 0.25 * track_width
    marker_3 = 0.5 * track_width

    if distance_from_center <= marker_1:
        reward *= 1.4
    elif distance_from_center <= marker_2:
        reward *= 1.2
    elif distance_from_center <= marker_3:
        reward *= 0.8
    else:
        return 1e-3

    # Evita zig-zag
    if steering > 20:
        reward *= 0.4

    # Direção e velocidade em curvas e Retas
    atual_wp = closest_wp[1]

    if atual_wp in CURVA_ESQUERDA:
        if is_right_of_center:
            reward *= 1.4
            
        if speed >= 3.0:
            reward *= 0.8  # velocidade alta em curva não é bom
        elif speed >= 1.5:
            reward *= 1.5
        else:
            return 1e-3
            
    elif atual_wp in CURVA_DIREITA:
        
        if is_left_of_center:
            reward *= 1.4
            
        if speed >= 3.0:
            reward *= 0.8  # velocidade alta em curva não é bom
            
        elif speed >= 1.5:
            reward *= 1.5
        else:
            return 1e-3
            
    else:
        if speed >= 3.0:
            reward *= 1.8
            
        elif speed >= 2.0:
            reward *= 1.2
            
        else:
            return 1e-3

    return float(reward)