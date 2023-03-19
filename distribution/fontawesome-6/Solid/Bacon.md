# Bacon


```text
fontawesome-6/Solid/Bacon
```

```text
include('fontawesome-6/Solid/Bacon')
```



| Illustration | Bacon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bacon.png) | ![illustration for Bacon](../../fontawesome-6/Solid/Bacon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BaconXs>`
- `<$BaconSm>`
- `<$BaconMd>`
- `<$BaconLg>`





## Bacon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bacon
include('fontawesome-6/Solid/Bacon')

' renders the element
Bacon('Bacon', 'Bacon', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bacon
include('fontawesome-6/Solid/Bacon')

' renders the element
Bacon('Bacon', 'Bacon', 'an optional tech label', 'an optional description')
@enduml
```

