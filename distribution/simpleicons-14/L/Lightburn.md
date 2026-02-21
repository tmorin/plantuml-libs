# Lightburn


```text
simpleicons-14/L/Lightburn
```

```text
include('simpleicons-14/L/Lightburn')
```



| Illustration | Lightburn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lightburn.png) | ![illustration for Lightburn](../../simpleicons-14/L/Lightburn.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lightburn
include('simpleicons-14/L/Lightburn')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lightburn
include('simpleicons-14/L/Lightburn')

' renders the element
Lightburn('Lightburn', 'Lightburn', 'an optional tech label', 'an optional description')
@enduml
```

