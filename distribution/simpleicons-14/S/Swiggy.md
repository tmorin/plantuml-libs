# Swiggy


```text
simpleicons-14/S/Swiggy
```

```text
include('simpleicons-14/S/Swiggy')
```



| Illustration | Swiggy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Swiggy.png) | ![illustration for Swiggy](../../simpleicons-14/S/Swiggy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwiggyXs>`
- `<$SwiggySm>`
- `<$SwiggyMd>`
- `<$SwiggyLg>`





## Swiggy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Swiggy
include('simpleicons-14/S/Swiggy')

' renders the element
Swiggy('Swiggy', 'Swiggy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swiggy
include('simpleicons-14/S/Swiggy')

' renders the element
Swiggy('Swiggy', 'Swiggy', 'an optional tech label', 'an optional description')
@enduml
```

