# Fortran


```text
simpleicons-14/F/Fortran
```

```text
include('simpleicons-14/F/Fortran')
```



| Illustration | Fortran |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fortran.png) | ![illustration for Fortran](../../simpleicons-14/F/Fortran.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FortranXs>`
- `<$FortranSm>`
- `<$FortranMd>`
- `<$FortranLg>`





## Fortran

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fortran
include('simpleicons-14/F/Fortran')

' renders the element
Fortran('Fortran', 'Fortran', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fortran
include('simpleicons-14/F/Fortran')

' renders the element
Fortran('Fortran', 'Fortran', 'an optional tech label', 'an optional description')
@enduml
```

