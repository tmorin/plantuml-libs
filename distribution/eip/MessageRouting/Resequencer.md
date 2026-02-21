# Resequencer


```text
eip/MessageRouting/Resequencer
```

```text
include('eip/MessageRouting/Resequencer')
```



| Illustration | Resequencer | ResequencerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageRouting/Resequencer.png) | ![illustration for Resequencer](../../eip/MessageRouting/Resequencer.Local.png) | ![illustration for ResequencerGroup](../../eip/MessageRouting/ResequencerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ResequencerXs>`
- `<$ResequencerSm>`
- `<$ResequencerMd>`
- `<$ResequencerLg>`





## Resequencer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element Resequencer
include('eip/MessageRouting/Resequencer')

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
include('eip/bootstrap')

' loads the Item which embeds the element Resequencer
include('eip/MessageRouting/Resequencer')

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
include('eip/bootstrap')

' loads the Item which embeds the element ResequencerGroup
include('eip/MessageRouting/Resequencer')

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
include('eip/bootstrap')

' loads the Item which embeds the element ResequencerGroup
include('eip/MessageRouting/Resequencer')

' renders the element
ResequencerGroup('ResequencerGroup', 'Resequencer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

