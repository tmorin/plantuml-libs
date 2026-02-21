# Collaboraonline


```text
simpleicons-14/C/Collaboraonline
```

```text
include('simpleicons-14/C/Collaboraonline')
```



| Illustration | Collaboraonline |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Collaboraonline.png) | ![illustration for Collaboraonline](../../simpleicons-14/C/Collaboraonline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CollaboraonlineXs>`
- `<$CollaboraonlineSm>`
- `<$CollaboraonlineMd>`
- `<$CollaboraonlineLg>`





## Collaboraonline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Collaboraonline
include('simpleicons-14/C/Collaboraonline')

' renders the element
Collaboraonline('Collaboraonline', 'Collaboraonline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Collaboraonline
include('simpleicons-14/C/Collaboraonline')

' renders the element
Collaboraonline('Collaboraonline', 'Collaboraonline', 'an optional tech label', 'an optional description')
@enduml
```

