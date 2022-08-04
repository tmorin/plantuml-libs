# Resequencer


```text
eip-1/MessageRouting/Resequencer
```

```text
include('eip-1/MessageRouting/Resequencer')
```



| Illustration | Resequencer | ResequencerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageRouting/Resequencer.png) | ![illustration for Resequencer](../../eip-1/MessageRouting/Resequencer.Local.png) | ![illustration for ResequencerGroup](../../eip-1/MessageRouting/ResequencerGroup.Local.png) |




## Resequencer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Resequencer
include('eip-1/MessageRouting/Resequencer')

' renders the element
Resequencer('Resequencer', 'Resequencer', 'an optional tech label', 'an optional description')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element Resequencer
include('eip-1/MessageRouting/Resequencer')

' renders the element
Resequencer('Resequencer', 'Resequencer', 'an optional tech label', 'an optional description')
@enduml
```

## ResequencerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ResequencerGroup
include('eip-1/MessageRouting/Resequencer')

' renders the element
ResequencerGroup('ResequencerGroup', 'Resequencer Group', 'an optional tech label') {
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
include('eip-1/bootstrap')

' loads the Item which embeds the element ResequencerGroup
include('eip-1/MessageRouting/Resequencer')

' renders the element
ResequencerGroup('ResequencerGroup', 'Resequencer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

