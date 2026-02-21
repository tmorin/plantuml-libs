# LockOutline


```text
material/Action/LockOutline
```

```text
include('material/Action/LockOutline')
```



| Illustration | LockOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/LockOutline.png) | ![illustration for LockOutline](../../material/Action/LockOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LockOutlineXs>`
- `<$LockOutlineSm>`
- `<$LockOutlineMd>`
- `<$LockOutlineLg>`





## LockOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LockOutline
include('material/Action/LockOutline')

' renders the element
LockOutline('LockOutline', 'Lock Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LockOutline
include('material/Action/LockOutline')

' renders the element
LockOutline('LockOutline', 'Lock Outline', 'an optional tech label', 'an optional description')
@enduml
```

