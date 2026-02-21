# ChildDress


```text
fontawesome/Solid/ChildDress
```

```text
include('fontawesome/Solid/ChildDress')
```



| Illustration | ChildDress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChildDress.png) | ![illustration for ChildDress](../../fontawesome/Solid/ChildDress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChildDressXs>`
- `<$ChildDressSm>`
- `<$ChildDressMd>`
- `<$ChildDressLg>`





## ChildDress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChildDress
include('fontawesome/Solid/ChildDress')

' renders the element
ChildDress('ChildDress', 'Child Dress', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChildDress
include('fontawesome/Solid/ChildDress')

' renders the element
ChildDress('ChildDress', 'Child Dress', 'an optional tech label', 'an optional description')
@enduml
```

