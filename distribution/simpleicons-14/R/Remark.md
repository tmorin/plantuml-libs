# Remark


```text
simpleicons-14/R/Remark
```

```text
include('simpleicons-14/R/Remark')
```



| Illustration | Remark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Remark.png) | ![illustration for Remark](../../simpleicons-14/R/Remark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemarkXs>`
- `<$RemarkSm>`
- `<$RemarkMd>`
- `<$RemarkLg>`





## Remark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Remark
include('simpleicons-14/R/Remark')

' renders the element
Remark('Remark', 'Remark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Remark
include('simpleicons-14/R/Remark')

' renders the element
Remark('Remark', 'Remark', 'an optional tech label', 'an optional description')
@enduml
```

