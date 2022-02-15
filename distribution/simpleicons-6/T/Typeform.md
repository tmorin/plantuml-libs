# Typeform


```text
simpleicons-6/T/Typeform
```

```text
include('simpleicons-6/T/Typeform')
```



| Illustration | Typeform |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Typeform.png) | ![illustration for Typeform](../../simpleicons-6/T/Typeform.Local.png) |




## Typeform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Typeform
include('simpleicons-6/T/Typeform')

' renders the element
Typeform('Typeform', 'Typeform', 'an optional tech label')
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

' loads the Item which embeds the element Typeform
include('simpleicons-6/T/Typeform')

' renders the element
Typeform('Typeform', 'Typeform', 'an optional tech label')
@enduml
```

