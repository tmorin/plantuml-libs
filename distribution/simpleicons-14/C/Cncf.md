# Cncf


```text
simpleicons-14/C/Cncf
```

```text
include('simpleicons-14/C/Cncf')
```



| Illustration | Cncf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cncf.png) | ![illustration for Cncf](../../simpleicons-14/C/Cncf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CncfXs>`
- `<$CncfSm>`
- `<$CncfMd>`
- `<$CncfLg>`





## Cncf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cncf
include('simpleicons-14/C/Cncf')

' renders the element
Cncf('Cncf', 'Cncf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cncf
include('simpleicons-14/C/Cncf')

' renders the element
Cncf('Cncf', 'Cncf', 'an optional tech label', 'an optional description')
@enduml
```

