# Paddle


```text
simpleicons/P/Paddle
```

```text
include('simpleicons/P/Paddle')
```



| Illustration | Paddle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paddle.png) | ![illustration for Paddle](../../simpleicons/P/Paddle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaddleXs>`
- `<$PaddleSm>`
- `<$PaddleMd>`
- `<$PaddleLg>`





## Paddle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paddle
include('simpleicons/P/Paddle')

' renders the element
Paddle('Paddle', 'Paddle', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paddle
include('simpleicons/P/Paddle')

' renders the element
Paddle('Paddle', 'Paddle', 'an optional tech label', 'an optional description')
@enduml
```

