# Hypothesis


```text
simpleicons-5/H/Hypothesis
```

```text
include('simpleicons-5/H/Hypothesis')
```



| Illustration | Hypothesis |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hypothesis.png) | ![illustration for Hypothesis](../../simpleicons-5/H/Hypothesis.Local.png) |




## Hypothesis

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hypothesis
include('simpleicons-5/H/Hypothesis')

' renders the element
Hypothesis('Hypothesis', 'Hypothesis', 'an optional tech label')
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

' loads the Item which embeds the element Hypothesis
include('simpleicons-5/H/Hypothesis')

' renders the element
Hypothesis('Hypothesis', 'Hypothesis', 'an optional tech label')
@enduml
```

