# MessageReturnAddress


```text
eip/MessageConstruction/MessageReturnAddress
```

```text
include('eip/MessageConstruction/MessageReturnAddress')
```



| Illustration | MessageReturnAddress | MessageReturnAddressGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageConstruction/MessageReturnAddress.png) | ![illustration for MessageReturnAddress](../../eip/MessageConstruction/MessageReturnAddress.Local.png) | ![illustration for MessageReturnAddressGroup](../../eip/MessageConstruction/MessageReturnAddressGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageReturnAddressXs>`
- `<$MessageReturnAddressSm>`
- `<$MessageReturnAddressMd>`
- `<$MessageReturnAddressLg>`





## MessageReturnAddress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageReturnAddress
include('eip/MessageConstruction/MessageReturnAddress')

' renders the element
MessageReturnAddress('MessageReturnAddress', 'Message Return Address', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageReturnAddress
include('eip/MessageConstruction/MessageReturnAddress')

' renders the element
MessageReturnAddress('MessageReturnAddress', 'Message Return Address', 'an optional tech label', 'an optional description')
@enduml
```

## MessageReturnAddressGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageReturnAddressGroup
include('eip/MessageConstruction/MessageReturnAddress')

' renders the element
MessageReturnAddressGroup('MessageReturnAddressGroup', 'Message Return Address Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageReturnAddressGroup
include('eip/MessageConstruction/MessageReturnAddress')

' renders the element
MessageReturnAddressGroup('MessageReturnAddressGroup', 'Message Return Address Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

