# Pytest


```text
simpleicons-5/P/Pytest
```

```text
include('simpleicons-5/P/Pytest')
```



| Illustration | Pytest |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Pytest.png) | ![illustration for Pytest](../../simpleicons-5/P/Pytest.Local.png) |




## Pytest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pytest
include('simpleicons-5/P/Pytest')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Pytest
include('simpleicons-5/P/Pytest')

' renders the element
Pytest('Pytest', 'Pytest', 'an optional tech label')
@enduml
```

