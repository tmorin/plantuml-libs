# Normalizer

```text
eip/MessageTransformation/Normalizer
```

```text
include('eip/MessageTransformation/Normalizer')
```

|icon|element|
|---|---|
|![](Normalizer.png)|![](Normalizer.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Normalizer element
include('eip/MessageTransformation/Normalizer')
Normalizer('normalizer', 'Normalizer', 'an optional tech field')
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
' loads the eip bootstrap
include('eip/bootstrap')
' loads the Normalizer element
include('eip/MessageTransformation/Normalizer')
Normalizer('normalizer', 'Normalizer', 'an optional tech field')
@enduml
```

