# Streamlabs


```text
simpleicons-14/S/Streamlabs
```

```text
include('simpleicons-14/S/Streamlabs')
```



| Illustration | Streamlabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Streamlabs.png) | ![illustration for Streamlabs](../../simpleicons-14/S/Streamlabs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StreamlabsXs>`
- `<$StreamlabsSm>`
- `<$StreamlabsMd>`
- `<$StreamlabsLg>`





## Streamlabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Streamlabs
include('simpleicons-14/S/Streamlabs')

' renders the element
Streamlabs('Streamlabs', 'Streamlabs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Streamlabs
include('simpleicons-14/S/Streamlabs')

' renders the element
Streamlabs('Streamlabs', 'Streamlabs', 'an optional tech label', 'an optional description')
@enduml
```

