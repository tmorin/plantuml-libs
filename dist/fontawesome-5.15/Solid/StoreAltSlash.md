# Store Alt Slash

```text
fontawesome-5.15/Solid/StoreAltSlash
```

```text
include('fontawesome-5.15/Solid/StoreAltSlash')
```

|icon|element|
|---|---|
|![](StoreAltSlash.png)|![](StoreAltSlash.element.png)|



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
' loads the StoreAltSlash element
include('fontawesome-5.15/Solid/StoreAltSlash')
StoreAltSlash('store_alt_slash', 'Store Alt Slash', 'an optional tech field')
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
' loads the StoreAltSlash element
include('fontawesome-5.15/Solid/StoreAltSlash')
StoreAltSlash('store_alt_slash', 'Store Alt Slash', 'an optional tech field')
@enduml
```

