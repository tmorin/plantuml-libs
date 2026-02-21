# PlusOne


```text
material/Social/PlusOne
```

```text
include('material/Social/PlusOne')
```



| Illustration | PlusOne |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/PlusOne.png) | ![illustration for PlusOne](../../material/Social/PlusOne.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlusOneXs>`
- `<$PlusOneSm>`
- `<$PlusOneMd>`
- `<$PlusOneLg>`





## PlusOne

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PlusOne
include('material/Social/PlusOne')

' renders the element
PlusOne('PlusOne', 'Plus One', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PlusOne
include('material/Social/PlusOne')

' renders the element
PlusOne('PlusOne', 'Plus One', 'an optional tech label', 'an optional description')
@enduml
```

