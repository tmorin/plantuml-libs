# Notepadplusplus


```text
simpleicons-6/N/Notepadplusplus
```

```text
include('simpleicons-6/N/Notepadplusplus')
```



| Illustration | Notepadplusplus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/N/Notepadplusplus.png) | ![illustration for Notepadplusplus](../../simpleicons-6/N/Notepadplusplus.Local.png) |




## Notepadplusplus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Notepadplusplus
include('simpleicons-6/N/Notepadplusplus')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Notepadplusplus
include('simpleicons-6/N/Notepadplusplus')

' renders the element
Notepadplusplus('Notepadplusplus', 'Notepadplusplus', 'an optional tech label')
@enduml
```

