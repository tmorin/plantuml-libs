# MinusCircle


```text
fontawesome-5/Solid/MinusCircle
```

```text
include('fontawesome-5/Solid/MinusCircle')
```



| Illustration | MinusCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MinusCircle.png) | ![illustration for MinusCircle](../../fontawesome-5/Solid/MinusCircle.Local.png) |




## MinusCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MinusCircle
include('fontawesome-5/Solid/MinusCircle')

' renders the element
MinusCircle('MinusCircle', 'Minus Circle', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MinusCircle
include('fontawesome-5/Solid/MinusCircle')

' renders the element
MinusCircle('MinusCircle', 'Minus Circle', 'an optional tech label')
@enduml
```

