# Bigquery

```text
gcp/Item/BigData/Bigquery
```

```text
include('gcp/Item/BigData/Bigquery')
```

|icon|card|element|group|
|---|---|---|---|
|![](Bigquery.png)|![](Bigquery.card.png)|![](Bigquery.element.png)|![](Bigquery.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Bigquery element
include('gcp/Item/BigData/Bigquery')
BigqueryCard('bigquery', 'Bigquery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Bigquery element
include('gcp/Item/BigData/Bigquery')
BigqueryCard('bigquery', 'Bigquery', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Bigquery element
include('gcp/Item/BigData/Bigquery')
Bigquery('bigquery', 'Bigquery', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Bigquery element
include('gcp/Item/BigData/Bigquery')
Bigquery('bigquery', 'Bigquery', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Bigquery element
include('gcp/Item/BigData/Bigquery')
BigqueryGroup('bigquery', 'Bigquery', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the Bigquery element
include('gcp/Item/BigData/Bigquery')
BigqueryGroup('bigquery', 'Bigquery', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

