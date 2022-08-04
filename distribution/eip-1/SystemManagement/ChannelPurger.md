# ChannelPurger


```text
eip-1/SystemManagement/ChannelPurger
```

```text
include('eip-1/SystemManagement/ChannelPurger')
```



| Illustration | ChannelPurger | ChannelPurgerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/SystemManagement/ChannelPurger.png) | ![illustration for ChannelPurger](../../eip-1/SystemManagement/ChannelPurger.Local.png) | ![illustration for ChannelPurgerGroup](../../eip-1/SystemManagement/ChannelPurgerGroup.Local.png) |




## ChannelPurger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ChannelPurger
include('eip-1/SystemManagement/ChannelPurger')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element ChannelPurger
include('eip-1/SystemManagement/ChannelPurger')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element ChannelPurgerGroup
include('eip-1/SystemManagement/ChannelPurger')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element ChannelPurgerGroup
include('eip-1/SystemManagement/ChannelPurger')

' renders the element
ChannelPurgerGroup('ChannelPurgerGroup', 'Channel Purger Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

