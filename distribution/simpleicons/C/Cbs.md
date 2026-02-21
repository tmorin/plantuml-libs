# Cbs


```text
simpleicons/C/Cbs
```

```text
include('simpleicons/C/Cbs')
```



| Illustration | Cbs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cbs.png) | ![illustration for Cbs](../../simpleicons/C/Cbs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CbsXs>`
- `<$CbsSm>`
- `<$CbsMd>`
- `<$CbsLg>`





## Cbs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cbs
include('simpleicons/C/Cbs')

' renders the element
Cbs('Cbs', 'Cbs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cbs
include('simpleicons/C/Cbs')

' renders the element
Cbs('Cbs', 'Cbs', 'an optional tech label', 'an optional description')
@enduml
```

