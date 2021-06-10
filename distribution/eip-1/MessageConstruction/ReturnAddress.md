# ReturnAddress


```text
eip-1/MessageConstruction/ReturnAddress
```

```text
include('eip-1/MessageConstruction/ReturnAddress')
```



| Illustration | ReturnAddress | ReturnAddressGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessageConstruction/ReturnAddress.png) | ![illustration for ReturnAddress](../../eip-1/MessageConstruction/ReturnAddress.Local.png) | ![illustration for ReturnAddressGroup](../../eip-1/MessageConstruction/ReturnAddressGroup.Local.png) |




## ReturnAddress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ReturnAddress
include('eip-1/MessageConstruction/ReturnAddress')

' renders the element
ReturnAddress('ReturnAddress', 'Return Address', 'an optional tech label')
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

' loads the Item which embeds the element ReturnAddress
include('eip-1/MessageConstruction/ReturnAddress')

' renders the element
ReturnAddress('ReturnAddress', 'Return Address', 'an optional tech label')
@enduml
```

## ReturnAddressGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element ReturnAddressGroup
include('eip-1/MessageConstruction/ReturnAddress')

' renders the element
ReturnAddressGroup('ReturnAddressGroup', 'Return Address Group', 'an optional tech label') {
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

' loads the Item which embeds the element ReturnAddressGroup
include('eip-1/MessageConstruction/ReturnAddress')

' renders the element
ReturnAddressGroup('ReturnAddressGroup', 'Return Address Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

