# Lunacy


```text
simpleicons-6/L/Lunacy
```

```text
include('simpleicons-6/L/Lunacy')
```



| Illustration | Lunacy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lunacy.png) | ![illustration for Lunacy](../../simpleicons-6/L/Lunacy.Local.png) |




## Lunacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lunacy
include('simpleicons-6/L/Lunacy')

' renders the element
Lunacy('Lunacy', 'Lunacy', 'an optional tech label')
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

' loads the Item which embeds the element Lunacy
include('simpleicons-6/L/Lunacy')

' renders the element
Lunacy('Lunacy', 'Lunacy', 'an optional tech label')
@enduml
```

