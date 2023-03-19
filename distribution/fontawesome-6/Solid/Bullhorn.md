# Bullhorn


```text
fontawesome-6/Solid/Bullhorn
```

```text
include('fontawesome-6/Solid/Bullhorn')
```



| Illustration | Bullhorn |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bullhorn.png) | ![illustration for Bullhorn](../../fontawesome-6/Solid/Bullhorn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BullhornXs>`
- `<$BullhornSm>`
- `<$BullhornMd>`
- `<$BullhornLg>`





## Bullhorn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bullhorn
include('fontawesome-6/Solid/Bullhorn')

' renders the element
Bullhorn('Bullhorn', 'Bullhorn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bullhorn
include('fontawesome-6/Solid/Bullhorn')

' renders the element
Bullhorn('Bullhorn', 'Bullhorn', 'an optional tech label', 'an optional description')
@enduml
```

