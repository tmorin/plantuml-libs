# Theconversation


```text
simpleicons-7/T/Theconversation
```

```text
include('simpleicons-7/T/Theconversation')
```



| Illustration | Theconversation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Theconversation.png) | ![illustration for Theconversation](../../simpleicons-7/T/Theconversation.Local.png) |




## Theconversation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Theconversation
include('simpleicons-7/T/Theconversation')

' renders the element
Theconversation('Theconversation', 'Theconversation', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Theconversation
include('simpleicons-7/T/Theconversation')

' renders the element
Theconversation('Theconversation', 'Theconversation', 'an optional tech label')
@enduml
```

