# Genomics


```text
gcp/Item/BigData/Genomics
```

```text
include('gcp/Item/BigData/Genomics')
```



| Illustration | Genomics | GenomicsCard | GenomicsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/BigData/Genomics.png) | ![illustration for Genomics](../../../gcp/Item/BigData/Genomics.Local.png) | ![illustration for GenomicsCard](../../../gcp/Item/BigData/GenomicsCard.Local.png) | ![illustration for GenomicsGroup](../../../gcp/Item/BigData/GenomicsGroup.Local.png) |




## Genomics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Genomics
include('gcp/Item/BigData/Genomics')

' renders the element
Genomics('Genomics', 'Genomics', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Genomics
include('gcp/Item/BigData/Genomics')

' renders the element
Genomics('Genomics', 'Genomics', 'an optional tech label')
@enduml
```

## GenomicsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GenomicsCard
include('gcp/Item/BigData/Genomics')

' renders the element
GenomicsCard('GenomicsCard', 'Genomics Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GenomicsCard
include('gcp/Item/BigData/Genomics')

' renders the element
GenomicsCard('GenomicsCard', 'Genomics Card', 'an optional description')
@enduml
```

## GenomicsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GenomicsGroup
include('gcp/Item/BigData/Genomics')

' renders the element
GenomicsGroup('GenomicsGroup', 'Genomics Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element GenomicsGroup
include('gcp/Item/BigData/Genomics')

' renders the element
GenomicsGroup('GenomicsGroup', 'Genomics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

