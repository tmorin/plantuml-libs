# PersonRemoveAlt1


```text
material-4/Social/PersonRemoveAlt1
```

```text
include('material-4/Social/PersonRemoveAlt1')
```



| Illustration | PersonRemoveAlt1 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/PersonRemoveAlt1.png) | ![illustration for PersonRemoveAlt1](../../material-4/Social/PersonRemoveAlt1.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonRemoveAlt1Xs>`
- `<$PersonRemoveAlt1Sm>`
- `<$PersonRemoveAlt1Md>`
- `<$PersonRemoveAlt1Lg>`





## PersonRemoveAlt1

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PersonRemoveAlt1
include('material-4/Social/PersonRemoveAlt1')

' renders the element
PersonRemoveAlt1('PersonRemoveAlt1', 'Person Remove Alt1', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PersonRemoveAlt1
include('material-4/Social/PersonRemoveAlt1')

' renders the element
PersonRemoveAlt1('PersonRemoveAlt1', 'Person Remove Alt1', 'an optional tech label', 'an optional description')
@enduml
```

