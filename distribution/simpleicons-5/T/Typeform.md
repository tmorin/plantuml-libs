# Typeform


```text
simpleicons-5/T/Typeform
```

```text
include('simpleicons-5/T/Typeform')
```



| Illustration | Typeform |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Typeform.png) | ![illustration for Typeform](../../simpleicons-5/T/Typeform.Local.png) |




## Typeform

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Typeform
include('simpleicons-5/T/Typeform')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Typeform
include('simpleicons-5/T/Typeform')

' renders the element
Typeform('Typeform', 'Typeform', 'an optional tech label')
@enduml
```

