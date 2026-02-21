# Viblo


```text
simpleicons-14/V/Viblo
```

```text
include('simpleicons-14/V/Viblo')
```



| Illustration | Viblo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Viblo.png) | ![illustration for Viblo](../../simpleicons-14/V/Viblo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VibloXs>`
- `<$VibloSm>`
- `<$VibloMd>`
- `<$VibloLg>`





## Viblo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Viblo
include('simpleicons-14/V/Viblo')

' renders the element
Viblo('Viblo', 'Viblo', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Viblo
include('simpleicons-14/V/Viblo')

' renders the element
Viblo('Viblo', 'Viblo', 'an optional tech label', 'an optional description')
@enduml
```

