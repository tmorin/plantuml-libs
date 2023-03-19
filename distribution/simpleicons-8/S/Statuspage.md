# Statuspage


```text
simpleicons-8/S/Statuspage
```

```text
include('simpleicons-8/S/Statuspage')
```



| Illustration | Statuspage |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Statuspage.png) | ![illustration for Statuspage](../../simpleicons-8/S/Statuspage.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StatuspageXs>`
- `<$StatuspageSm>`
- `<$StatuspageMd>`
- `<$StatuspageLg>`





## Statuspage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Statuspage
include('simpleicons-8/S/Statuspage')

' renders the element
Statuspage('Statuspage', 'Statuspage', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Statuspage
include('simpleicons-8/S/Statuspage')

' renders the element
Statuspage('Statuspage', 'Statuspage', 'an optional tech label', 'an optional description')
@enduml
```

