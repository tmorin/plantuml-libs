# Hdfcbank


```text
simpleicons/H/Hdfcbank
```

```text
include('simpleicons/H/Hdfcbank')
```



| Illustration | Hdfcbank |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hdfcbank.png) | ![illustration for Hdfcbank](../../simpleicons/H/Hdfcbank.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HdfcbankXs>`
- `<$HdfcbankSm>`
- `<$HdfcbankMd>`
- `<$HdfcbankLg>`





## Hdfcbank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hdfcbank
include('simpleicons/H/Hdfcbank')

' renders the element
Hdfcbank('Hdfcbank', 'Hdfcbank', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hdfcbank
include('simpleicons/H/Hdfcbank')

' renders the element
Hdfcbank('Hdfcbank', 'Hdfcbank', 'an optional tech label', 'an optional description')
@enduml
```

