# Maxplanckgesellschaft


```text
simpleicons/M/Maxplanckgesellschaft
```

```text
include('simpleicons/M/Maxplanckgesellschaft')
```



| Illustration | Maxplanckgesellschaft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Maxplanckgesellschaft.png) | ![illustration for Maxplanckgesellschaft](../../simpleicons/M/Maxplanckgesellschaft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaxplanckgesellschaftXs>`
- `<$MaxplanckgesellschaftSm>`
- `<$MaxplanckgesellschaftMd>`
- `<$MaxplanckgesellschaftLg>`





## Maxplanckgesellschaft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Maxplanckgesellschaft
include('simpleicons/M/Maxplanckgesellschaft')

' renders the element
Maxplanckgesellschaft('Maxplanckgesellschaft', 'Maxplanckgesellschaft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Maxplanckgesellschaft
include('simpleicons/M/Maxplanckgesellschaft')

' renders the element
Maxplanckgesellschaft('Maxplanckgesellschaft', 'Maxplanckgesellschaft', 'an optional tech label', 'an optional description')
@enduml
```

