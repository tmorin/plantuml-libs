# Themodelsresource


```text
simpleicons/T/Themodelsresource
```

```text
include('simpleicons/T/Themodelsresource')
```



| Illustration | Themodelsresource |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Themodelsresource.png) | ![illustration for Themodelsresource](../../simpleicons/T/Themodelsresource.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThemodelsresourceXs>`
- `<$ThemodelsresourceSm>`
- `<$ThemodelsresourceMd>`
- `<$ThemodelsresourceLg>`





## Themodelsresource

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Themodelsresource
include('simpleicons/T/Themodelsresource')

' renders the element
Themodelsresource('Themodelsresource', 'Themodelsresource', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Themodelsresource
include('simpleicons/T/Themodelsresource')

' renders the element
Themodelsresource('Themodelsresource', 'Themodelsresource', 'an optional tech label', 'an optional description')
@enduml
```

