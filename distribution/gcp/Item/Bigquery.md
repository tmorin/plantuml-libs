# Bigquery


```text
gcp/Item/Bigquery
```

```text
include('gcp/Item/Bigquery')
```



| Illustration | Bigquery | BigqueryCard | BigqueryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Bigquery.png) | ![illustration for Bigquery](../../gcp/Item/Bigquery.Local.png) | ![illustration for BigqueryCard](../../gcp/Item/BigqueryCard.Local.png) | ![illustration for BigqueryGroup](../../gcp/Item/BigqueryGroup.Local.png) |




## Bigquery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Bigquery
include('gcp/Item/Bigquery')

' renders the element
Bigquery('Bigquery', 'Bigquery', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element Bigquery
include('gcp/Item/Bigquery')

' renders the element
Bigquery('Bigquery', 'Bigquery', 'an optional tech label', 'an optional description')
@enduml
```

## BigqueryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element BigqueryCard
include('gcp/Item/Bigquery')

' renders the element
BigqueryCard('BigqueryCard', 'Bigquery Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element BigqueryCard
include('gcp/Item/Bigquery')

' renders the element
BigqueryCard('BigqueryCard', 'Bigquery Card', 'an optional description')
@enduml
```

## BigqueryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element BigqueryGroup
include('gcp/Item/Bigquery')

' renders the element
BigqueryGroup('BigqueryGroup', 'Bigquery Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element BigqueryGroup
include('gcp/Item/Bigquery')

' renders the element
BigqueryGroup('BigqueryGroup', 'Bigquery Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

