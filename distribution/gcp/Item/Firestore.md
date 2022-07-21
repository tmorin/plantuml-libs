# Firestore


```text
gcp/Item/Firestore
```

```text
include('gcp/Item/Firestore')
```



| Illustration | Firestore | FirestoreCard | FirestoreGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Firestore.png) | ![illustration for Firestore](../../gcp/Item/Firestore.Local.png) | ![illustration for FirestoreCard](../../gcp/Item/FirestoreCard.Local.png) | ![illustration for FirestoreGroup](../../gcp/Item/FirestoreGroup.Local.png) |




## Firestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Firestore
include('gcp/Item/Firestore')

' renders the element
Firestore('Firestore', 'Firestore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Firestore
include('gcp/Item/Firestore')

' renders the element
Firestore('Firestore', 'Firestore', 'an optional tech label', 'an optional description')
@enduml
```

## FirestoreCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element FirestoreCard
include('gcp/Item/Firestore')

' renders the element
FirestoreCard('FirestoreCard', 'Firestore Card', 'an optional description')
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

' loads the Item which embeds the element FirestoreCard
include('gcp/Item/Firestore')

' renders the element
FirestoreCard('FirestoreCard', 'Firestore Card', 'an optional description')
@enduml
```

## FirestoreGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element FirestoreGroup
include('gcp/Item/Firestore')

' renders the element
FirestoreGroup('FirestoreGroup', 'Firestore Group', 'an optional tech label') {
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

' loads the Item which embeds the element FirestoreGroup
include('gcp/Item/Firestore')

' renders the element
FirestoreGroup('FirestoreGroup', 'Firestore Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

