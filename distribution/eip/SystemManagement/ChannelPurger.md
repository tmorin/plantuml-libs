# ChannelPurger


```text
eip/SystemManagement/ChannelPurger
```

```text
include('eip/SystemManagement/ChannelPurger')
```



| Illustration | ChannelPurger | ChannelPurgerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/SystemManagement/ChannelPurger.png) | ![illustration for ChannelPurger](../../eip/SystemManagement/ChannelPurger.Local.png) | ![illustration for ChannelPurgerGroup](../../eip/SystemManagement/ChannelPurgerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChannelPurgerXs>`
- `<$ChannelPurgerSm>`
- `<$ChannelPurgerMd>`
- `<$ChannelPurgerLg>`





## ChannelPurger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ChannelPurger
include('eip/SystemManagement/ChannelPurger')

' renders the element
ChannelPurger('ChannelPurger', 'Channel Purger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChannelPurger
include('eip/SystemManagement/ChannelPurger')

' renders the element
ChannelPurger('ChannelPurger', 'Channel Purger', 'an optional tech label', 'an optional description')
@enduml
```

## ChannelPurgerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ChannelPurgerGroup
include('eip/SystemManagement/ChannelPurger')

' renders the element
ChannelPurgerGroup('ChannelPurgerGroup', 'Channel Purger Group', 'an optional tech label') {
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

' loads the Item which embeds the element ChannelPurgerGroup
include('eip/SystemManagement/ChannelPurger')

' renders the element
ChannelPurgerGroup('ChannelPurgerGroup', 'Channel Purger Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

