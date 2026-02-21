# Lottiefiles


```text
simpleicons/L/Lottiefiles
```

```text
include('simpleicons/L/Lottiefiles')
```



| Illustration | Lottiefiles |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lottiefiles.png) | ![illustration for Lottiefiles](../../simpleicons/L/Lottiefiles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LottiefilesXs>`
- `<$LottiefilesSm>`
- `<$LottiefilesMd>`
- `<$LottiefilesLg>`





## Lottiefiles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lottiefiles
include('simpleicons/L/Lottiefiles')

' renders the element
Lottiefiles('Lottiefiles', 'Lottiefiles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lottiefiles
include('simpleicons/L/Lottiefiles')

' renders the element
Lottiefiles('Lottiefiles', 'Lottiefiles', 'an optional tech label', 'an optional description')
@enduml
```

