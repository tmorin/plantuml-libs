# PersonCirclePlus


```text
fontawesome/Solid/PersonCirclePlus
```

```text
include('fontawesome/Solid/PersonCirclePlus')
```



| Illustration | PersonCirclePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonCirclePlus.png) | ![illustration for PersonCirclePlus](../../fontawesome/Solid/PersonCirclePlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonCirclePlusXs>`
- `<$PersonCirclePlusSm>`
- `<$PersonCirclePlusMd>`
- `<$PersonCirclePlusLg>`





## PersonCirclePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonCirclePlus
include('fontawesome/Solid/PersonCirclePlus')

' renders the element
PersonCirclePlus('PersonCirclePlus', 'Person Circle Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCirclePlus
include('fontawesome/Solid/PersonCirclePlus')

' renders the element
PersonCirclePlus('PersonCirclePlus', 'Person Circle Plus', 'an optional tech label', 'an optional description')
@enduml
```

