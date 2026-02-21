# Lightburn


```text
simpleicons/L/Lightburn
```

```text
include('simpleicons/L/Lightburn')
```



| Illustration | Lightburn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lightburn.png) | ![illustration for Lightburn](../../simpleicons/L/Lightburn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LightburnXs>`
- `<$LightburnSm>`
- `<$LightburnMd>`
- `<$LightburnLg>`





## Lightburn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lightburn
include('simpleicons/L/Lightburn')

' renders the element
Lightburn('Lightburn', 'Lightburn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lightburn
include('simpleicons/L/Lightburn')

' renders the element
Lightburn('Lightburn', 'Lightburn', 'an optional tech label', 'an optional description')
@enduml
```

