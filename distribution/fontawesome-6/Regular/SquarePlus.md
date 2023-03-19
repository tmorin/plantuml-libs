# SquarePlus


```text
fontawesome-6/Regular/SquarePlus
```

```text
include('fontawesome-6/Regular/SquarePlus')
```



| Illustration | SquarePlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/SquarePlus.png) | ![illustration for SquarePlus](../../fontawesome-6/Regular/SquarePlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquarePlusXs>`
- `<$SquarePlusSm>`
- `<$SquarePlusMd>`
- `<$SquarePlusLg>`





## SquarePlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquarePlus
include('fontawesome-6/Regular/SquarePlus')

' renders the element
SquarePlus('SquarePlus', 'Square Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquarePlus
include('fontawesome-6/Regular/SquarePlus')

' renders the element
SquarePlus('SquarePlus', 'Square Plus', 'an optional tech label', 'an optional description')
@enduml
```

