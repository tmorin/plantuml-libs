# Pytorchlightning


```text
simpleicons-8/P/Pytorchlightning
```

```text
include('simpleicons-8/P/Pytorchlightning')
```



| Illustration | Pytorchlightning |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pytorchlightning.png) | ![illustration for Pytorchlightning](../../simpleicons-8/P/Pytorchlightning.Local.png) |




## Pytorchlightning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pytorchlightning
include('simpleicons-8/P/Pytorchlightning')

' renders the element
Pytorchlightning('Pytorchlightning', 'Pytorchlightning', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pytorchlightning
include('simpleicons-8/P/Pytorchlightning')

' renders the element
Pytorchlightning('Pytorchlightning', 'Pytorchlightning', 'an optional tech label', 'an optional description')
@enduml
```

