# Retweet

```text
fontawesome-5.15/Solid/Retweet
```

```text
include('fontawesome-5.15/Solid/Retweet')
```

|icon|element|
|---|---|
|![](Retweet.png)|![](Retweet.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the Retweet element
include('fontawesome-5.15/Solid/Retweet')
Retweet('retweet', 'Retweet', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the Retweet element
include('fontawesome-5.15/Solid/Retweet')
Retweet('retweet', 'Retweet', 'an optional tech field')
@enduml
```

