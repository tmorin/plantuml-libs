# GenericDatabase


```text
aws-20210131/Resource/GeneralIcons/GenericDatabase
```

```text
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')
```



| Illustration | GenericDatabase | GenericDatabaseCard | GenericDatabaseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/GeneralIcons/GenericDatabase.png) | ![illustration for GenericDatabase](../../../aws-20210131/Resource/GeneralIcons/GenericDatabase.Local.png) | ![illustration for GenericDatabaseCard](../../../aws-20210131/Resource/GeneralIcons/GenericDatabaseCard.Local.png) | ![illustration for GenericDatabaseGroup](../../../aws-20210131/Resource/GeneralIcons/GenericDatabaseGroup.Local.png) |




## GenericDatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GenericDatabase
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')

' renders the element
GenericDatabase('GenericDatabase', 'Generic Database', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GenericDatabase
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')

' renders the element
GenericDatabase('GenericDatabase', 'Generic Database', 'an optional tech label')
@enduml
```

## GenericDatabaseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GenericDatabaseCard
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')

' renders the element
GenericDatabaseCard('GenericDatabaseCard', 'Generic Database Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GenericDatabaseCard
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')

' renders the element
GenericDatabaseCard('GenericDatabaseCard', 'Generic Database Card', 'an optional description')
@enduml
```

## GenericDatabaseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GenericDatabaseGroup
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')

' renders the element
GenericDatabaseGroup('GenericDatabaseGroup', 'Generic Database Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GenericDatabaseGroup
include('aws-20210131/Resource/GeneralIcons/GenericDatabase')

' renders the element
GenericDatabaseGroup('GenericDatabaseGroup', 'Generic Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

