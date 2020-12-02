# Mastodon

```text
fontawesome-5.15/Brands/Mastodon
```

```text
include('fontawesome-5.15/Brands/Mastodon')
```

|icon|element|
|---|---|
|![](Mastodon.png)|![](Mastodon.element.png)|



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
' loads the Mastodon element
include('fontawesome-5.15/Brands/Mastodon')
Mastodon('mastodon', 'Mastodon', 'an optional tech field')
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
' loads the Mastodon element
include('fontawesome-5.15/Brands/Mastodon')
Mastodon('mastodon', 'Mastodon', 'an optional tech field')
@enduml
```

