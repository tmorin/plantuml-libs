# Home


```text
gcp/Item/Home
```

```text
include('gcp/Item/Home')
```



| Illustration | Home | HomeCard | HomeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/Home.png) | ![illustration for Home](../../gcp/Item/Home.Local.png) | ![illustration for HomeCard](../../gcp/Item/HomeCard.Local.png) | ![illustration for HomeGroup](../../gcp/Item/HomeGroup.Local.png) |




## Home

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element Home
include('gcp/Item/Home')

' renders the element
Home('Home', 'Home', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Home
include('gcp/Item/Home')

' renders the element
Home('Home', 'Home', 'an optional tech label', 'an optional description')
@enduml
```

## HomeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element HomeCard
include('gcp/Item/Home')

' renders the element
HomeCard('HomeCard', 'Home Card', 'an optional description')
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

' loads the Item which embeds the element HomeCard
include('gcp/Item/Home')

' renders the element
HomeCard('HomeCard', 'Home Card', 'an optional description')
@enduml
```

## HomeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element HomeGroup
include('gcp/Item/Home')

' renders the element
HomeGroup('HomeGroup', 'Home Group', 'an optional tech label') {
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

' loads the Item which embeds the element HomeGroup
include('gcp/Item/Home')

' renders the element
HomeGroup('HomeGroup', 'Home Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

