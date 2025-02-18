# Oneplus


```text
simpleicons-14/O/Oneplus
```

```text
include('simpleicons-14/O/Oneplus')
```



| Illustration | Oneplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Oneplus.png) | ![illustration for Oneplus](../../simpleicons-14/O/Oneplus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OneplusXs>`
- `<$OneplusSm>`
- `<$OneplusMd>`
- `<$OneplusLg>`





## Oneplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Oneplus
include('simpleicons-14/O/Oneplus')

' renders the element
Oneplus('Oneplus', 'Oneplus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oneplus
include('simpleicons-14/O/Oneplus')

' renders the element
Oneplus('Oneplus', 'Oneplus', 'an optional tech label', 'an optional description')
@enduml
```

