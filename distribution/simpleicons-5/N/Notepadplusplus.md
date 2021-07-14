# Notepadplusplus


```text
simpleicons-5/N/Notepadplusplus
```

```text
include('simpleicons-5/N/Notepadplusplus')
```



| Illustration | Notepadplusplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Notepadplusplus.png) | ![illustration for Notepadplusplus](../../simpleicons-5/N/Notepadplusplus.Local.png) |




## Notepadplusplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Notepadplusplus
include('simpleicons-5/N/Notepadplusplus')

' renders the element
Notepadplusplus('Notepadplusplus', 'Notepadplusplus', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Notepadplusplus
include('simpleicons-5/N/Notepadplusplus')

' renders the element
Notepadplusplus('Notepadplusplus', 'Notepadplusplus', 'an optional tech label')
@enduml
```

