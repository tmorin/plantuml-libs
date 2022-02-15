# Pytest


```text
simpleicons-6/P/Pytest
```

```text
include('simpleicons-6/P/Pytest')
```



| Illustration | Pytest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Pytest.png) | ![illustration for Pytest](../../simpleicons-6/P/Pytest.Local.png) |




## Pytest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Pytest
include('simpleicons-6/P/Pytest')

' renders the element
Pytest('Pytest', 'Pytest', 'an optional tech label')
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

' loads the Item which embeds the element Pytest
include('simpleicons-6/P/Pytest')

' renders the element
Pytest('Pytest', 'Pytest', 'an optional tech label')
@enduml
```

